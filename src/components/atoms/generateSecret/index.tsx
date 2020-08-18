const GenerateSecret = () => {
  return Math.random().toString(36).slice(-8);
};
export default GenerateSecret;
