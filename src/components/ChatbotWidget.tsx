"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { CLINIC, SERVICES } from "@/lib/data";
import styles from "./ChatbotWidget.module.css";

// ============================================================
// CONVERSATION TREE DEFINITION
// ============================================================

type StepId =
  | "home"
  | "booking_method"
  | "booking_services"
  | "booking_custom"
  | "date_select"
  | "timing_select"
  | "booking_confirm"
  | "clinic_info"
  | "emergency";

interface ChatButton {
  label: string;
  action: () => void;
  variant?: "primary" | "secondary" | "success" | "danger" | "link" | "back";
  icon?: string;
  href?: string;
}

// ============================================================
// HELPERS
// ============================================================

const TIMING_SLOTS = [
  { label: "10:00 AM", value: "10:00 AM" },
  { label: "11:00 AM", value: "11:00 AM" },
  { label: "12:00 PM", value: "12:00 PM" },
  { label: "1:00 PM", value: "1:00 PM" },
  { label: "5:00 PM", value: "5:00 PM" },
  { label: "6:00 PM", value: "6:00 PM" },
  { label: "7:00 PM", value: "7:00 PM" },
  // 8:00 PM removed as requested
];

const getAvailableDates = () => {
  const dates = [];
  const today = new Date();
  
  // Check next 10 days to find 7 non-Sundays
  for (let i = 0; i <= 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    
    if (d.getDay() !== 0) { // Skip Sunday (0)
      const isToday = i === 0;
      dates.push({
        label: isToday ? `Today (${d.getDate()} ${d.toLocaleDateString('en-GB', { month: 'short' })})` : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', weekday: 'short' }),
        value: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      });
    }
    if (dates.length >= 7) break;
  }
  return dates;
};

// ============================================================
// COMPONENT
// ============================================================

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [step, setStep] = useState<StepId>("home");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [customReason, setCustomReason] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [windowKey, setWindowKey] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  const availableDates = useMemo(() => getAvailableDates(), []);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Show tooltip
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setShowTooltip(true), 3000);
      return () => clearTimeout(t);
    } else {
      setShowTooltip(false);
    }
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [step, isTyping, selectedService, customReason, selectedDate, selectedTime]);

  const navigateTo = useCallback((newStep: StepId) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setStep(newStep);
    }, 800);
  }, []);

  const handleOpen = () => {
    setWindowKey((k) => k + 1);
    setIsOpen(true);
    setStep("home");
    setSelectedService(null);
    setCustomReason("");
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleClose = () => setIsOpen(false);

  const buildWhatsAppUrl = () => {
    const reason = selectedService || customReason || "General Consultation";
    const dateInfo = selectedDate ? ` Date: ${selectedDate}` : "";
    const timeInfo = selectedTime ? ` Time: ${selectedTime}` : "";
    return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(
      `Hi! I'd like to book an appointment for: ${reason}.${dateInfo}${timeInfo}`
    )}`;
  };

  // ============================================================
  // LOGIC
  // ============================================================

  const getMessage = (): string => {
    switch (step) {
      case "home": return "👋 Welcome to **Swastik Dental Care**! I'm your digital assistant. How can I help you today?";
      case "booking_method": return "📅 Would you like to select a specific treatment or describe your concern?";
      case "booking_services": return "🦷 Please select the treatment you're interested in:";
      case "booking_custom": return "Please describe your dental concern so we can prepare for your visit:";
      case "date_select": return "📅 Which day would you like to visit us? (We're closed on Sundays)";
      case "timing_select": return "⏰ Great! Now select your preferred time slot:";
      case "booking_confirm":
        const reason = selectedService || customReason || "Appointment";
        return `Excellent! You've requested a **${reason}** appointment on **${selectedDate}** at **${selectedTime}**. Confirm now?`;
      case "clinic_info": return "🏥 What information can I provide about our clinic?";
      case "emergency": return "⚠️ For **severe pain or dental emergency**, please call our emergency line immediately. We prioritize emergency cases!";
      default: return "";
    }
  };

  const getButtons = (): ChatButton[] => {
    const backToHome = { label: "🏠 Main Menu", variant: "back" as const, action: () => navigateTo("home") };

    switch (step) {
      case "home":
        return [
          { label: "📅 Book Appointment", variant: "primary", action: () => navigateTo("booking_method") },
          { label: "🏥 Clinic Info", variant: "secondary", action: () => navigateTo("clinic_info") },
          { label: "🚨 Emergency", variant: "danger", action: () => navigateTo("emergency") },
        ];

      case "booking_method":
        return [
          { label: "🦷 Select Treatment", variant: "secondary", action: () => navigateTo("booking_services") },
          { label: "📝 Describe My Concern", variant: "secondary", action: () => navigateTo("booking_custom") },
          { label: "⬅️ Back", variant: "back", action: () => navigateTo("home") },
          backToHome,
        ];

      case "booking_services":
        return [
          ...SERVICES.map((s) => ({
            label: s.title,
            variant: "secondary" as const,
            action: () => { setSelectedService(s.title); setCustomReason(""); navigateTo("date_select"); },
          })),
          { label: "⬅️ Back", variant: "back", action: () => navigateTo("booking_method") },
          backToHome,
        ];

      case "booking_custom":
        return [
          { label: "Continue ➔", variant: "primary", action: () => { if (customReason.trim()) { setSelectedService(null); navigateTo("date_select"); } } },
          { label: "⬅️ Back", variant: "back", action: () => navigateTo("booking_method") },
          backToHome,
        ];

      case "date_select":
        return [
          ...availableDates.map((d) => ({
            label: d.label,
            variant: "secondary" as const,
            action: () => { setSelectedDate(d.value); navigateTo("timing_select"); },
          })),
          { label: "⬅️ Back", variant: "back", action: () => { if (customReason) navigateTo("booking_custom"); else navigateTo("booking_services"); } },
          backToHome,
        ];

      case "timing_select":
        return [
          ...TIMING_SLOTS.map((slot) => ({
            label: slot.label,
            variant: "secondary" as const,
            action: () => { setSelectedTime(slot.value); navigateTo("booking_confirm"); },
          })),
          { label: "⬅️ Back", variant: "back", action: () => navigateTo("date_select") },
          backToHome,
        ];

      case "booking_confirm":
        return [
          { label: "✅ Confirm via WhatsApp", variant: "success", href: buildWhatsAppUrl(), action: () => {} },
          { label: "⬅️ Back", variant: "back", action: () => navigateTo("timing_select") },
          backToHome,
        ];

      case "clinic_info":
        return [
          { label: "📍 Get Directions", variant: "primary", href: CLINIC.googleMapsUrl, action: () => {} },
          { label: "⏰ Opening Hours", variant: "secondary", action: () => navigateTo("clinic_info") },
          { label: "📞 Call Now", variant: "link", href: `tel:${CLINIC.phone}`, action: () => {} },
          { label: "⬅️ Back", variant: "back", action: () => navigateTo("home") },
          backToHome,
        ];

      case "emergency":
        return [
          { label: "🔴 Call Emergency Line", variant: "danger", href: `tel:${CLINIC.phone}`, action: () => {} },
          { label: "💬 WhatsApp Us", variant: "success", href: `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent("Hi, I have a dental emergency. Please help!")}`, action: () => {} },
          { label: "⬅️ Back", variant: "back", action: () => navigateTo("home") },
          backToHome,
        ];

      default: return [];
    }
  };

  const getBtnClass = (variant: ChatButton["variant"]) => {
    switch (variant) {
      case "primary": return `${styles.chatBtn} ${styles.chatBtnPrimary}`;
      case "secondary": return `${styles.chatBtn} ${styles.chatBtnSecondary}`;
      case "success": return `${styles.chatBtn} ${styles.chatBtnSuccess}`;
      case "danger": return `${styles.chatBtn} ${styles.chatBtnDanger}`;
      case "link": return `${styles.chatBtn} ${styles.chatBtnLink}`;
      case "back": return `${styles.chatBtn} ${styles.chatBtnBack}`;
      default: return `${styles.chatBtn} ${styles.chatBtnSecondary}`;
    }
  };

  const renderMessage = (msg: string) => {
    const parts = msg.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part);
  };

  const message = getMessage();
  const buttons = getButtons();
  const navButtons = buttons.filter((b) => b.variant === "back");
  const actionButtons = buttons.filter((b) => b.variant !== "back");

  return (
    <div className={styles.widgetWrapper}>
      {isOpen && (
        <div key={windowKey} className={`${styles.window} ${styles.windowEnter}`}>
          <div className={styles.header}>
            <div className={styles.headerAvatar}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path>
              </svg>
            </div>
            <div className={styles.headerInfo}>
              <div className={styles.headerName}>Swastik Bot</div>
              <div className={styles.headerStatus}><span className={styles.statusDot} />Always Online</div>
            </div>
            <button className={styles.headerClose} onClick={handleClose}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className={styles.body} ref={bodyRef}>
            {!isTyping && (
              <div className={styles.botMessage}>
                <div className={styles.botAvatar}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M12 8V4H8"></path><path d="M15 13v2"></path><path d="M9 13v2"></path>
                  </svg>
                </div>
                <div className={styles.botBubble}>{renderMessage(message)}</div>
              </div>
            )}

            {step === "booking_custom" && !isTyping && (
              <div className={styles.inputContainer}>
                <textarea className={styles.chatInput} placeholder="Tell us what's bothering you..." value={customReason} onChange={(e) => setCustomReason(e.target.value)} autoFocus />
              </div>
            )}

            {step === "clinic_info" && !isTyping && (
              <div className={styles.treatmentInfo}><strong>Mon – Sat:</strong><br />{CLINIC.hours.morning}<br />{CLINIC.hours.evening}<br /><strong>Sunday:</strong> {CLINIC.hours.sunday}</div>
            )}

            {/* Buttons moved INSIDE scrollable body */}
            {!isTyping && (
              <div className={styles.innerButtonsArea}>
                {actionButtons.map((btn, i) => btn.href ? (
                  <a key={i} href={btn.href} target="_blank" rel="noopener noreferrer" className={getBtnClass(btn.variant)}>{btn.label}</a>
                ) : (
                  <button key={i} className={getBtnClass(btn.variant)} onClick={btn.action}>{btn.label}</button>
                ))}

                {navButtons.length > 0 && (
                  <>
                    <div className={styles.divider} />
                    <div className={styles.navRow}>
                      {navButtons.map((btn, i) => <button key={i} className={getBtnClass("back")} onClick={btn.action}>{btn.label}</button>)}
                    </div>
                  </>
                )}
              </div>
            )}

            {isTyping && (
              <div className={styles.typing}>
                <div className={styles.botAvatar}>
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M12 8V4H8"></path>
                  </svg>
                </div>
                <div className={styles.typingBubble}><div className={styles.typingDot} /><div className={styles.typingDot} /><div className={styles.typingDot} /></div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.triggerContainer}>
        {showTooltip && !isOpen && <div className={styles.triggerTooltip}>👋 Hi! Need help?</div>}
        <button className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ""}`} onClick={isOpen ? handleClose : handleOpen}>
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
