function Background({ children }) {
  return (
    <div className="absolute -z-10">
      <img
        src="/images/background/full_bg.png"
        className="self-cover self-center w-screen"
      />
    </div>
  );
}

export default Background;
