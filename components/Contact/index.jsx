"use client";
import { useState } from "react";
import packagesData from "../Pricing/packagesData";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [data, setData] = useState({name:"",package:"Lite",message:""})
  const onChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  const onSubmit=(e)=>{
    e.preventDefault()
    let url =
    "https://wa.me/6285156651059?text=" +
    "*Nama*: " +
    data.name +
    "%0a" +
    "*Paket Website yang dipilih:*: " +
    data.package +
    "%0a" +
    "*Pesan*:" +
    data.message;

  window.open(url, "_blank").focus();
  setData({name:"",package:"Lite",message:""})
  }
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Hubungi Kami
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                kami akan respon secepatnya
              </p>
              <form onSubmit={onSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nama
                      </label>
                      <input
                        type="text"
                        value={data.name}
                        onChange={onChange}
                        name="name"

                        placeholder="Masukkan nama anda"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="package"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Pilih paket
                      </label>
                      <select 
                      onChange={(e)=>onChange({
                        target:{value:e.target.value,name:"package"}
                      })}
                      name={data.package}
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">
  {
    packagesData.map((item)=>(
      <option key={item.id} value={item.title}>{item.title}</option>
    ))
  }

</select>
                      {/* <input
                         value={data.package}
                         onChange={onChange}
                         name="package"
                        type="text"
                        placeholder="Pilih"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      /> */}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Pesan
                      </label>
                      <textarea
                         value={data.message}
                         onChange={onChange}
                        name="message"
                        rows="5"
                        placeholder="masukkan pesan anda"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Kirim
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
