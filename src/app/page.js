import Image from "next/image";

export default function Home() {
  const width = 100;

  return (
    <>
      <div>
        <h2>WEB</h2>
        Hello, WEB!!
        <p>
          <img src="/image1.jpg" alt="" width={width} height={width} />
        </p>
      </div>
    </>
  );
}

// const Home = () => {
//   return <div>Hello World</div>;
// };

// export default Home;
