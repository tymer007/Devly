const ProfileCards = (props) => {
  return (
    <div className=" max-w-64 rounded-2xl overflow-hidden shadow-xl m-4 cursor-pointer ">
      <img  className="w-full h-48 object-cover" src={props.imgURL} alt={props.title} />
      {/* <h1>{props.imgURL}</h1> */}
      <div className="px-6 py-4 -ml-4">
      <h2 className="font-bold text-xl mb-2">{props.title}</h2>
      <p className="text-sm justify-center " >{props.      description}</p>
      </div>
      
    </div>
  )
}

export default ProfileCards;
