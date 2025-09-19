


export const validUrlRegex = (url) => {
   const urlRegex = /^(ftp|http|https):\/\/(\w+(:\w+)?@)?([^\s/:]+)(:\d+)?(\/[\w#!:.?+=&%@!\-/]*)?$/i;

    if (urlRegex.test(url)) {
        return true;

    }
}