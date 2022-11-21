import { motion } from 'framer-motion';

export const StateSharingMotion = () => {
  return (
    <svg width="462" height="216" viewBox="0 0 462 216" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="177.146" height="99" rx="7.5" fill="#FEFDFB" />
      <motion.circle
        animate={{
          scale: [1, 1, 1, 1, 1, 1, 1, 1.83, 1.83, 1.83, 1.83, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1, 1, 1, 1, 1, 1],
          fill: [
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F27B2F',
            '#F27B2F',
          ],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          times: [
            0.05, 0.085, 0.135, 0.17, 0.22, 0.255, 0.305, 0.34, 0.39, 0.425, 0.475, 0.51, 0.56, 0.595, 0.645, 0.68,
            0.73, 0.765, 0.815, 0.85, 0.9, 0.935, 1,
          ],
          repeat: Infinity,
        }}
        style={{
          originX: '32px',
          originY: '50px',
        }}
        cx="52"
        cy="50"
        r="20"
        fill="#F27B2F"
      />
      <motion.rect
        animate={{
          scale: [1, 1.6, 1.6, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          times: [
            0.05, 0.085, 0.135, 0.17, 0.22, 0.255, 0.305, 0.34, 0.39, 0.425, 0.475, 0.51, 0.56, 0.595, 0.645, 0.68,
            0.73, 0.765, 0.815, 0.85, 0.9, 0.935, 1,
          ],
          repeat: Infinity,
        }}
        x="71.0723"
        y="32"
        width="36"
        height="36"
        fill="#764AF3"
      />
      <motion.circle
        animate={{
          scale: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1, 1, 1, 1],
          fill: [
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F27B2F',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F5B103',
            '#F27B2F',
            '#F27B2F',
          ],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          times: [
            0.05, 0.085, 0.135, 0.17, 0.22, 0.255, 0.305, 0.34, 0.39, 0.425, 0.475, 0.51, 0.56, 0.595, 0.645, 0.68,
            0.73, 0.765, 0.815, 0.85, 0.9, 0.935, 1,
          ],
          repeat: Infinity,
        }}
        cx="126.146"
        cy="50"
        r="20"
        fill="#F27B2F"
      />
      <rect x="0.5" y="0.5" width="177.146" height="99" rx="7.5" stroke="#C2BDBA" />
      <rect x="89.5723" y="116.5" width="177.146" height="99" rx="7.5" fill="#FEFDFB" />
      <circle cx="141.072" cy="166" r="20" fill="#F27B2F" />
      <rect x="160.145" y="148" width="36" height="36" fill="#764AF3" />
      <circle cx="215.219" cy="166" r="20" fill="#F27B2F" />
      <rect x="89.5723" y="116.5" width="177.146" height="99" rx="7.5" stroke="#C2BDBA" />
      <rect x="194.48" y="0.5" width="177.146" height="99" rx="7.5" fill="#FEFDFB" />
      <circle cx="245.98" cy="50" r="20" fill="#F27B2F" />
      <rect x="265.053" y="32" width="36" height="36" fill="#764AF3" />
      <circle cx="320.127" cy="50" r="20" fill="#F27B2F" />
      <rect x="194.48" y="0.5" width="177.146" height="99" rx="7.5" stroke="#C2BDBA" />
      <rect x="283.555" y="116.5" width="177.146" height="99" rx="7.5" fill="#FEFDFB" />
      <circle cx="335.055" cy="166" r="20" fill="#F27B2F" />
      <rect x="354.127" y="148" width="36" height="36" fill="#764AF3" />
      <circle cx="409.201" cy="166" r="20" fill="#F27B2F" />
      <rect x="283.555" y="116.5" width="177.146" height="99" rx="7.5" stroke="#C2BDBA" />
    </svg>
  );
};
