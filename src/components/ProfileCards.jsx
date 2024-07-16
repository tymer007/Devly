const ProfileCards = (props) => {
  return (
    <div className=" bg-white w-[17.625rem] shadow-xl mx-auto rounded-2xl border border-gray-300 border-5 mt-5">
      <div className="p-5">
      <div className="flex flex-row justify-between ">
        <div className="">
          <h3 className="font-bold text-base">{props.name}</h3>
          <p className="text-sm">{props.title}</p>
        </div>
        <img src={props.image} alt="" className="w-12 h-12" style={{borderRadius:"100%"}}/>  
      </div>   
      <div className="mt-5 flex flex-col">
        <p className="text-sm">{props.description}</p>
        <span className="">
        {props.skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#E2F3E5] rounded-full px-2 py-1 text-xs font-semibold text-black mb-2 inline-block mx-[1px]"
          >
            {skill}
          </div>
        ))}
        </span>
        <button className="bg-[#0DA16C] w-[45%] h-8 rounded-md m-auto text-white text-xs bottom-0 mt-5">View Profile</button> 
      </div>
      </div>
      
       
    </div>
  )
}

export default ProfileCards;
