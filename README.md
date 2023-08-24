# Misskey.io Embeder
nextjs...
## require
**バージョン**
- node.js v18以上
- あとは、`package.json`に書いてあるパッケージのバージョン
(`latest`とか`^`をつけない理由としては、もしそのパッケージを配信してるアカウントが乗っ取られて危険なバージョンがリリースされた場合に確認前にアップデートされないように(考えすぎかもです...))   

**環境変数**
- `misskeyTargetInstance`: misskeyのインスタンスのドメイン部分(例: `misskey.io`)
- `misskeyApplicationToken`: `misskeyTargetInstance`に指定したmisskeyのインスタンスのAPIトークン(権限については何も指定する必要なし)