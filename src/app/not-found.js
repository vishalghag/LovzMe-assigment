import Link from "next/link";

const notFound = () => {
  return (
    <div className=" flex  flex-col justify-center text-center h-[100vh]">
      <div>
        <h1>Page Not Found 404</h1>
      </div>
      <div>
        <h3>Page You are looking for not there </h3>
      </div>
      <div>
        <Link href="/">
          <h3 className=" text-red-600">
            Click here to get back to home page{" "}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default notFound;

//  style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
