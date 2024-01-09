import React from "react";

export default function Project() {
  return (
    <main className="container space-y-20 ">
      {/* header */}
      <section
        className="flex flex-col gap-4 bg-cover bg-no-repeat p-8"
        style={{ backgroundImage: "url(https://picsum.photos/200)" }}
      >
        <small className="text-coklat-1 font-semibold">Experience</small>
        <h2 className="text-army-1 text-4xl font-semibold">
          Creating Stunning Websites
        </h2>
        <small className="text-army-2">
          Ahmad Nasirin is a professional web developer specializing in creating
          visually appealing and functional websites.
        </small>
        <div className="flex items-center gap-3">
          <button>Portfolio</button>
          <button>Contact</button>
        </div>
      </section>

      <section>show all portfolio</section>
    </main>
  );
}
