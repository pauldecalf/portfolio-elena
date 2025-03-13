import BentoBox from "../bentoBox";

export const MapBox = () => {
  return (
    <BentoBox className="relative overflow-hidden">
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047033108!2d2.3354330156778396!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sOp%C3%A9ra%20Garnier!5e0!3m2!1sfr!2sfr!4v1646231559276!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="absolute bottom-0 left-0 p-3 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 rounded-tr-lg">
        <p className="text-sm font-medium">Paris, France</p>
      </div>
    </BentoBox>
  );
};
