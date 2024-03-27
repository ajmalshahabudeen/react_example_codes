"use client";
import { useState } from "react";
import { SampleOneFormA } from "@/components/SampleOneComponents/ComponentsForm/SampleOneFormA";
import { SampleOneFormB } from "@/components/SampleOneComponents/ComponentsForm/SampleOneFormB";
import { SampleOneFormC } from "@/components/SampleOneComponents/ComponentsForm/SampleOneFormC";
import { SampleOneFormD } from "@/components/SampleOneComponents/ComponentsForm/SampleOneFormD";

const SampleOnePage = () => {
  const [data, setData] = useState<string>("");

  const Submit = (e: any) => {
    e.preventDefault();
    setData("data from form submit");
  };

  const Refresh = () => {
    window.location.reload();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <p>
        Get Data from child components from a Form submit in Parent Component
      </p>
      <div>
        <form className="flex flex-col justify-center items-center">
          <SampleOneFormA />
          <SampleOneFormB />
          <SampleOneFormC />
          <SampleOneFormD />
          <div>
            <button
              onClick={Submit}
              type="button"
              className="border border-white rounded p-3 m-3 hover:bg-white hover:text-black"
            >
              Submit
            </button>
            <button
              onClick={Refresh}
              type="button"
              className="border border-white rounded p-3 m-3 hover:bg-white hover:text-black"
            >
              Refresh
            </button>
          </div>
        </form>
      </div>
      {data && <p>{data}</p>}
    </main>
  );
};

export default SampleOnePage;
