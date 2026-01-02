import {
  MessageSquare,
  Globe,
  Phone,
  Code,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedText = ({ text, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={elementRef} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0) scale(1)"
              : "translateY(20px) scale(0.95)",
            transition: `all 0.6s ease-out ${delay + index * 40}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const ScatterCard = ({ children, index = 0, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getStyle = () => {
    if (!isVisible) {
      const isLeft = index === 0;
      const isRight = index === 2;
      let distance = isLeft ? -300 : isRight ? 300 : 0;
      let rotation = isLeft ? -40 : isRight ? 40 : 0;

      return {
        opacity: 0,
        transform: `translateX(${distance}px) scale(0.5) rotateY(${rotation}deg)`,
        transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        perspective: "1500px",
        transformStyle: "preserve-3d",
      };
    }

    return {
      opacity: 1,
      transform: "translateX(0) translateY(0) scale(1) rotateZ(0)",
      transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      perspective: "1500px",
      transformStyle: "preserve-3d",
      animation: `scatterCard${index} 11s infinite cubic-bezier(0.4, 0.0, 0.2, 1)`,
      animationPlayState: isHovering ? "paused" : "running",
    };
  };

  return (
    <>
      <style>{`
        @keyframes scatterCard0 {
          0% {
            transform: translate(-300px, -200px) scale(0.5) rotateZ(-45deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(-300px, -200px) scale(0.5) rotateZ(-45deg);
          }
        }

        @keyframes scatterCard1 {
          0% {
            transform: translate(0, -280px) scale(0.4) rotateZ(0deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(0, -280px) scale(0.4) rotateZ(0deg);
          }
        }

        @keyframes scatterCard2 {
          0% {
            transform: translate(300px, -200px) scale(0.5) rotateZ(45deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(300px, -200px) scale(0.5) rotateZ(45deg);
          }
        }
      `}</style>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1500px" }}
      >
        <div ref={elementRef} style={getStyle()}>
          {children}
        </div>
      </div>
    </>
  );
};

const SplitCornerCard = ({ children, index = 0, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCornerTransform = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (isMobile) {
      return isVisible
        ? "translateY(0) scale(1)"
        : "translateY(50px) scale(0.95)";
    }

    if (isVisible) return "translate(0, 0) rotateX(0) rotateY(0) scale(1)";

    // Staggered entry from different directions
    if (index === 0) return "translate(-100vw, 0) rotateY(30deg) scale(0.9)"; // From Left
    if (index === 1) return "translate(100vw, 0) rotateY(-30deg) scale(0.9)"; // From Right
    if (index === 2) return "translate(0, -100vh) rotateX(30deg) scale(0.9)"; // From Top
    return "translate(0, 100vh) rotateX(-30deg) scale(0.9)"; // From Bottom
  };

  return (
    <div ref={containerRef} style={{ perspective: "2000px" }}>
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: getCornerTransform(),
          transition: `all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export { SMSService } from "./SMSService";

export { DIDService } from "./DIDService";

export { VoiceService } from "./VoiceService";

export { SoftwareService } from "./SoftwareService";

