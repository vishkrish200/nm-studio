import Image from "next/image";

const Logo1 = () => {
  return (
    <>
      <Image
        src="/NM_Studio_Logo(OnBlack).png"
        layout="intrinsic"
        width={100}
        height={40}
        objectFit="contain"
      />
    </>
  );
};

export default Logo1;
