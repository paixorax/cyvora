import React from "react";

const ComingSoon = () => {
  return (
    <div style={styles.container}>
      {/* Background Blobs */}
      <div style={styles.blobTopLeft}></div>
      <div style={styles.blobBottomRight}></div>

      <div style={styles.card}>
        {/* Main Text */}
        <h1 style={styles.comingSoonText}>COMING SOON</h1>
        <h1 style={styles.heading}>We are under updation</h1>
        <p style={styles.subheading}>& will be back soon!</p>

        {/* Dog */}
        <div style={styles.dogBox}>
          <svg
            width="220"
            height="220"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Body */}
            <path
              fill="#D4A76A"
              d="M350,380 Q400,350 380,300 Q360,250 300,250 L212,250 Q152,250 132,300 Q120,350 162,380 L350,380 Z"
            />
            {/* Chest */}
            <path
              fill="#E8C9A0"
              d="M212,250 Q256,280 300,250 L280,350 Q256,370 232,350 L212,250 Z"
            />
            {/* Head */}
            <ellipse cx="256" cy="180" rx="80" ry="70" fill="#D4A76A" />
            {/* Snout */}
            <ellipse cx="256" cy="210" rx="50" ry="30" fill="#E8C9A0" />
            {/* Nose */}
            <ellipse cx="256" cy="225" rx="15" ry="8" fill="#2D3436" />
            {/* Eyes */}
            <g>
              <ellipse cx="220" cy="170" rx="10" ry="12" fill="#2D3436" />
              <circle cx="218" cy="168" r="3" fill="#FFFFFF" />
              <ellipse cx="292" cy="170" rx="10" ry="12" fill="#2D3436" />
              <circle cx="290" cy="168" r="3" fill="#FFFFFF" />
            </g>
            {/* Eyebrows */}
            <path
              d="M210,155 Q220,150 230,155"
              stroke="#8B7355"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M282,155 Q292,150 302,155"
              stroke="#8B7355"
              strokeWidth="4"
              fill="none"
            />
            {/* Ears */}
            <path
              fill="#B8945F"
              d="M200,150 Q180,180 190,210 Q200,190 210,170 Z"
              style={{
                animation: "earMove 2s infinite alternate ease-in-out",
                transformOrigin: "195px 180px",
              }}
            />
            <path
              fill="#B8945F"
              d="M312,150 Q332,180 322,210 Q312,190 302,170 Z"
              style={{
                animation: "earMove 2s infinite alternate-reverse ease-in-out",
                transformOrigin: "317px 180px",
              }}
            />
            {/* Mouth */}
            <path
              d="M240,230 Q256,240 272,230"
              stroke="#2D3436"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* Tongue */}
            <path
              fill="#FF6B6B"
              d="M256,235 Q266,245 256,255 Q246,245 256,235"
              style={{
                animation: "pantTongue 1.5s infinite alternate ease-in-out",
                transformOrigin: "256px 245px",
              }}
            />
            {/* Paws */}
            <g>
              <circle cx="200" cy="380" r="20" fill="#D4A76A" />
              <circle cx="195" cy="375" r="4" fill="#8B7355" />
              <circle cx="205" cy="375" r="4" fill="#8B7355" />
              <circle cx="312" cy="380" r="20" fill="#D4A76A" />
              <circle cx="307" cy="375" r="4" fill="#8B7355" />
              <circle cx="317" cy="375" r="4" fill="#8B7355" />
            </g>
            {/* Back Paws */}
            <circle cx="170" cy="370" r="15" fill="#B8945F" />
            <circle cx="342" cy="370" r="15" fill="#B8945F" />
            {/* Tail */}
            <path
              fill="#D4A76A"
              d="M162,350 Q120,320 110,280 Q130,300 150,310 Q140,330 162,350 Z"
              style={{
                animation: "wagTail 1s infinite alternate ease-in-out",
                transformOrigin: "136px 315px",
              }}
            />
            {/* Fur details */}
            <g stroke="#8B7355" strokeWidth="1.5">
              <line x1="230" y1="220" x2="210" y2="215" />
              <line x1="230" y1="225" x2="210" y2="225" />
              <line x1="230" y1="230" x2="210" y2="235" />
              <line x1="282" y1="220" x2="302" y2="215" />
              <line x1="282" y1="225" x2="302" y2="225" />
              <line x1="282" y1="230" x2="302" y2="235" />
            </g>
            {/* Fur texture */}
            <g stroke="#B8945F" strokeWidth="1" opacity="0.3">
              <path d="M250,300 Q260,310 270,300" />
              <path d="M240,320 Q256,330 272,320" />
              <path d="M230,340 Q256,350 282,340" />
            </g>
            {/* Waving Paw */}
            <g
              style={{
                animation: "wavePaw 1.2s infinite alternate ease-in-out",
                transformOrigin: "312px 380px",
              }}
            >
              <circle cx="312" cy="380" r="20" fill="#D4A76A" />
              <circle cx="307" cy="375" r="4" fill="#8B7355" />
              <circle cx="317" cy="375" r="4" fill="#8B7355" />
              <circle cx="312" cy="385" r="4" fill="#8B7355" />
            </g>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes wavePaw {
          0% { transform: rotate(0deg) translateY(0); }
          100% { transform: rotate(15deg) translateY(-5px); }
        }
        @keyframes wagTail {
          0% { transform: rotate(-20deg); }
          100% { transform: rotate(20deg); }
        }
        @keyframes pantTongue {
          0%,100% { transform: scaleY(1); }
          50% { transform: scaleY(1.2); }
        }
        @keyframes earMove {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(5deg); }
        }
        @keyframes floatDog {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes blinkEyes {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes cardAppear {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes blobFloat {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,20px) scale(1.1); }
          100% { transform: translate(0,0) scale(1); }
        }

        /* Blink eyes */
        ellipse[cx="220"], ellipse[cx="292"] {
          animation: blinkEyes 3s infinite;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #FFF9E6 0%, #FFEEDD 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Segoe UI', sans-serif",
  },
  blobTopLeft: {
    position: "absolute",
    top: "5%",
    left: "5%",
    width: "300px",
    height: "300px",
    background: "rgba(212, 167, 106, 0.3)",
    borderRadius: "50%",
    filter: "blur(100px)",
    animation: "blobFloat 15s ease-in-out infinite alternate",
  },
  blobBottomRight: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    width: "350px",
    height: "350px",
    background: "rgba(232, 201, 160, 0.2)",
    borderRadius: "50%",
    filter: "blur(110px)",
    animation: "blobFloat 18s ease-in-out infinite alternate reverse",
  },
  card: {
    textAlign: "center",
    zIndex: 10,
    animation: "cardAppear 1s ease-out",
    padding: "60px 50px",
    borderRadius: "40px",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.9)",
    boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
    maxWidth: "500px",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  comingSoonText: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "900",
    letterSpacing: "8px",
    color: "#D4A76A",
    marginBottom: "10px",
    textTransform: "uppercase",
    textShadow: "2px 2px 12px rgba(212,167,106,0.3)",
  },
  heading: {
    fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
    fontWeight: "700",
    color: "#5D4037",
    lineHeight: "1.2",
    margin: "10px 0 5px 0",
  },
  subheading: {
    fontSize: "clamp(1.4rem,3.5vw,1.8rem)",
    color: "#795548",
    marginTop: "0",
    marginBottom: "35px",
    fontWeight: "400",
  },
  dogBox: {
    animation: "floatDog 4s ease-in-out infinite",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "scale(1.2)",
  },
};

export default ComingSoon;
