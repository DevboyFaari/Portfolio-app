import "./Testimonials.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Olukayode Sote",
          title: "Senior Developer",
          img:
            "assets/man black.png",
          icon: "assets/twitter.png",
          desc:
            "A developer per excellence! He is good at OOP and most of the front end, Ive seen him grow from writing his first HTML to hundreds of lines of PHP codes.",
        },
        {
          id: 2,
          name: "Oluwapelumi Olusanya",
          title: "Frontend Developer",
          img:
            "assets/unnamed.png",
          icon: "assets/youtube.png",
          desc:
            "Faari is really committed to the job done. His attention to detail and work ethic is unparalleled.",
          featured: true,
        },
        {
          id: 3,
          name: "Muyiwa Ridwan",
          title: ".NET developer",
          img:
            "assets/smile.png",
          icon: "assets/linkedin.png",
          desc:
            "Writes clean, reusable code.",
        },
      ];
    return (
        <div className="Testimonials" id="Testimonials">
             <h1>Testimonials</h1>
             <div className="container">
             {data.map(d=>(

                 <div className={d.featured ? "card featured": "card"}>
                     <div className="top">
                         <img src="assets/right-arrow.png" className="left" alt=""/>
                         <img src={d.img}  className="user" alt=""/>
                        <img src={d.icon} className="right" alt="" />
                     </div>
                     <div className="center">{d.desc}</div>
                     <div className="bottom">
                         <h3>{d.name}</h3>
                         <h4>{d.title}</h4>
                     </div>
                 </div>
             ))}
             </div>
        </div>
    )
}
