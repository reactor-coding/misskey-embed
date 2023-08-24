const { misskeyTargetInstance, misskeyApplicationToken } = process.env;

/**
 * fetchを簡単にする(省略したいだけです)
 * @param { string } path /api/ を略したAPIへのパス
 * @param { string } params 送信内容
 * 
 * @returns {any} 面倒くさくなりました
 */
const connection = async function ({ path, params }) {
  const res = await fetch(`https://${misskeyTargetInstance}/api/${path}`, {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify({
      i: misskeyApplicationToken,
      ...params
    }),
    credentials: "omit",
    cache: "no-cache"
  });

  const res_content = res.status == 204 ? null : await res.json();

  switch (res.status) {
    case 200:
      return res_content;

    case 204:
      return null;

    default:
      return {
        "error": true,
        ...res_content.error
      };
  }
}

const misskey = {
  /**
   * @param { string } noteId
   */
  note: async (noteId) => {
    const note = await connection({ path: "notes/show", params: { noteId } });

    return {
      text: note.text,
      icon: note.user.avatarUrl
    }
  }
}