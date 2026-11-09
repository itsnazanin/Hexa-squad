import ReactMarkdown from "react-markdown";
import share from "@/assets/icons/share.svg"
import stars from "@/assets/images/Stars.png"
import { Calendar, EyeIcon, ThumbsDown, ThumbsUp } from "lucide-react"
import { Heart } from "lucide-react"
import Twitter from "@/assets/icons/Twitter"
import Facebook from "@/assets/icons/Facebook"
import Instagram from "@/assets/icons/Instagram"
import { useParams } from "react-router-dom"
import BlogComments from "@/components/Blogs/comment/BlogComments"
import { useBlogDetail } from "@/features/blogs/hooks/useBlogDetail"
import { useBlogReaction } from "@/features/blogs/hooks/useBlogReaction";


const formatBlogDate = (date, language = "fa") => {
  return new Intl.DateTimeFormat(
    language === "fa" ? "fa-IR" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ).format(new Date(date));
};

function BlogDetail() {

    const { blogId } = useParams()  
    const { data:blog , isLoading , isError , error } = useBlogDetail(blogId)

    const { reactMutation, removeMutation } = useBlogReaction(blogId);

    const handleReaction = (type) => {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            return;
        }


        if (blog.userReaction === type) {
            removeMutation.mutate();
            return;
        }

        reactMutation.mutate(type);
    };

    if(isLoading){
      return (
        <div className="flex justify-center items-center min-h-[400px]">
            <p>در حال دریافت اطلاعات مقاله ...</p>
        </div>
      )
    }

    if(!blog){
      return (
        <div className="flex justify-center items-center min-h-[400px]">
           <p>مقاله مورد نطر پیدا نشد </p>
        </div>
      )
    }

    if(isError) {
      return (
        <div className="flex justify-center items-center min-h-[400px]">
           <p>خطا در دریافت مقاله: {error.message}</p>
        </div>
      )
    }

        const translation = blog.translations?.[0]


    const articleUrl = window.location.href;

    const articleTitle = translation?.title || "HexaSquad Blog";

    const encodedUrl = encodeURIComponent(articleUrl);
    const encodedTitle = encodeURIComponent(articleTitle);


    if(!translation){
      return (
        <div className="flex justify-center items-center min-h-[400px]">
           <p>ترجمه مقاله برای این زبان موجود نیست</p>
        </div>
      )
    }

  return (
    <div className='flex flex-col justify-center mx-[80px] mt-[140px]'>
      {/* top section */}
      <div className='w-full flex gap-8'>
         <div className="w-[40%] h-[340px] rounded-[24px] border relative overflow-hidden">
            <img className="object-cover w-full h-full" src={blog.coverImage} alt="blog image" />
            <div className="bg-white rounded-full absolute top-10 right-10 drop-shadow-md text-[24px] flex gap-[6px] text-center justify-center items-center py-2 px-4 text-[#F44336]">
                <Heart />
                <p className="text-center relative top-1">{blog.likeCount}</p>
            </div>
         </div>
         <div className="flex flex-col w-[60%]">
             <h1 className="text-[32px]">{translation.title}</h1>
             <p className="pt-4 pb-[39px] text-[#455A64] font-light leading-7">{translation.shortDescription}</p>
         
             <div className="flex justify-between w-[80%]">
                <div className="flex gap-4 items-center">
                    <span className="text-[14px] flex items-center gap-1 text-[#2196F3]">
                        <EyeIcon size={14}/>
                        <p>{blog.viewCount} بازدید</p>
                    </span>
                    <span className="w-[6px] h-[6px] rounded-full bg-[#2196F3]" />
                    <span className="flex gap-1.5 items-center">
                        <Calendar size={14} color="#2196F3" />
                        <p className="text-[#2196F3] text-[14px]">{formatBlogDate(blog.createdAt)}</p>
                    </span>
                </div>
                <div className="bg-white shadow-md rounded-[16px] p-3 flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-[12px] relative overflow-hidden">
                        <img className="object-cover h-full w-full" src={blog.authorImage} alt={blog.author} />
                    </div>
                    <p className="text-[16px] text-[#263238] font-bold pl-10">{blog.author}</p>
                </div>
             </div>
         </div>
      </div>

      {/* middle section */}
      <div className="mx-[300px] mt-[100px]">
        <div className="blog-content text-[16px] leading-[2.2] text-[#455A64] [&_h1]:text-[28px] [&_h1]:font-bold [&_h1]:mb-6 [&_h2]:text-[24px] [&_h2]:font-bold [&_h2]:text-[#263238] [&_h2]:mt-10 [&_h2]:mb-5 [&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:mt-7 [&_h3]:mb-4 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pr-6 [&_li]:mb-2 [&_strong]:font-bold">
          <ReactMarkdown>
            {translation?.content || ""}
          </ReactMarkdown>
        </div>
        <div className="h-[480px] w-full rounded-[24px] relative overflow-hidden my-[48px]">
            <img className="h-full w-full object-cover" src={blog.blogImage} alt={translation.title} />
        </div>
        <p className="text-[#455A64] leading-7">این مثال برای آموزش از روی کتاب بود ولی برای ویدئو یا پادکست یا هر آنچه که میتوانید از آن مطلبی یاد بگیرید هم صدق میکند. شما در مثال بالا با هر بار از نو آموزش دیدن، هم مطلب را مرور میکنید و هم نکته هایی مهم که در طول آموزش متوجه نشده بودین را متوجه میشوید و این اصل قضیه است.</p>
      </div>



      {/* share section */}
      <div className="bg-[#ECEFF1] flex justify-between items-center rounded-[16px] py-5 px-6 mx-[300px] mt-[40px] mb-[32px]">
        <span className="flex gap-2 items-center">
            <img src={share} alt="share icon" />
            <p className="text-[#263238] font-bold">اشتراک گذاری</p>
        </span>
        <div className="flex gap-3 items-center">
           <div className='flex items-center justify-center cursor-pointer w-8 h-8 bg-[#B0BEC5] hover:bg-[#2196F3] rounded-full'>
              <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer">
                <Twitter className="text-white" />
              </a>
            </div>

            <div className='flex items-center justify-center cursor-pointer w-8 h-8 bg-[#B0BEC5] hover:bg-[#2196F3] rounded-full'>
              <a href={`https://www.facebook.com/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer">
                <Facebook className='text-white' />
              </a>
            </div>

            <div className='flex items-center justify-center cursor-pointer w-8 h-8 bg-[#B0BEC5] hover:bg-[#2196F3] rounded-full'>
              <button onClick={() => {
                navigator.clipboard.writeText(articleUrl)
                alert("لینک مقاله کپی شد")
              }}>
                <Instagram className="text-white" />
              </button>
            </div>
        </div>
      </div>

      <div className="flex justify-between mx-[300px]">
        <div className="flex items-center gap-4">
            <div>
              <img src={stars} alt="stars rate" />
            </div>
            <p className="text-[#263238]">امتیاز ۲۰ نفر</p>
            <button className="bg-[#2196F3] rounded-[80px] text-[12px] py-2.5 px-4 text-white">ثبت دیدگاه</button>
        </div>

        <div className="flex items-center gap-6">
            <p className="text-[#455A64]">ایا از این مقاله راضی بودید؟</p>


             <button onClick={() => handleReaction("LIKE")} 
              disabled={reactMutation.isPending || reactMutation.isPending}
              className={`flex items-center rounded-[50px] py-3 px-4 gap-2 text-[#263238] transition-colors 
              ${blog.userReaction === "LIKE"
                ? "bg-[#2196F3] text-white" : "bg-[#ECEFF1] text-[#263238]"
              }`}>
                <ThumbsUp />
                <p className="text-[20px]">{blog.likeCount}</p>
             </button>


              <button
                  onClick={() => handleReaction("DISLIKE")}
                  disabled={reactMutation.isPending || removeMutation.isPending}
                  className={`flex items-center rounded-[50px] py-3 px-4 gap-2 transition-colors ${
                      blog.userReaction === "DISLIKE"
                          ? "bg-[#2196F3] text-white"
                          : "bg-[#ECEFF1] text-[#263238]"
                  }`}
              >
                  <ThumbsDown />
                  <span className="text-[20px]">
                      {blog.dislikeCount}
                  </span>
              </button>
        </div>
        
      </div>

      {/* comment section */}
      <div className="mx-[300px] mt-12">
        <BlogComments blogId={blogId} />
      </div>


    </div>
  )
}

export default BlogDetail