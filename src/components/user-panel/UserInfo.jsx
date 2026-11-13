import userProfile from "@/assets/images/author1.jpg"

function UserInfo() {
  const user = {
    name: "کاربر هگزا اسکواد",
    avatar: userProfile,
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="relative w-[80px] h-[80px] overflow-hidden">
        <img
        src={user.avatar}
        alt={user.name}
        className="rounded-full object-cover w-full h-full"
        />
      </div>
      

      <h3 className="font-semibold text-[16px]">{user.name}</h3>

      <hr  className="h-1 bg-[#fafeff]"/>

    </div>
  );
}

export default UserInfo