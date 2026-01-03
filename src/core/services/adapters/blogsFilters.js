export const BLOGS_FILTERS = {
    landing: {
    params: {
      SortingCol: 'Date',
      SortType: 'desc',
    },
    },
    all:{
        label: "همه",
        params:{},
    },
    newest:{
        label:"جدیدترین ها",
        params:{
            SortingCol: "InsertDate",
            SortType: "DESC",
        },
    },
};