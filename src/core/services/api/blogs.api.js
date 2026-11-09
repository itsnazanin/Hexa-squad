import { apiClient } from "@/core/api/apiClient";
import { getApiLanguage } from "@/core/utils/language";

export const getBlogsApi = async (params = {}) => {
    const language = getApiLanguage(
        localStorage.getItem("language") || "fa"
    )

    const response = await apiClient.get(
        "/blogs", {
            params: {
                ...params,
                lang:language
            }
        }
    )

    return response.data
}

export const getBlogByIdApi = async (blogId) => {
    const language = getApiLanguage(
        localStorage.getItem("language") || "fa"
    )

    const response = await apiClient.get(`/blogs/${blogId}`, {
        params: {
            lang: language
        }
    })

    return response.data
}


export const getBlogCommentsApi = async (blogId) => {

 const { data } = await apiClient.get(`/blogs/${blogId}/comments`)

 return data
}

export const createBlogCommentApi = async (blogId, content) => {
 const { data } = await apiClient.post(
    `/blogs/${blogId}/comments`,
    { content }
 )

 return data
}


export const createBlogReplyApi = async (commentId, content) => {
    const { data } = await apiClient.post(
        `/blogs/comments/${commentId}/replies`,
        { content }
    )

    return data
}


export const likeBlogCommentApi = async (commentId) => {
    const { data } = await apiClient.post(
        `/blogs/comments/${commentId}/like`
    )

    return data
}


export const unlikeBlogCommentApi = async (commentId) => {
 const { data }= await apiClient.delete(
    `/blogs/comments/${commentId}/like`
 )

 return data
}


export const reactToBlogApi = async (blogId, type) => {
    const { data } = await apiClient.post(
        `/blogs/${blogId}/reaction`,
        { type }
    );

    return data;
};

export const removeBlogReactionApi = async (blogId) => {
    const { data } = await apiClient.delete(
        `/blogs/${blogId}/reaction`
    );

    return data;
};
