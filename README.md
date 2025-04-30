# geolonia-kintone-estimate-api

このプロジェクトは、AWS CDK を使用してデプロイされるシンプルな API です。
クエリパラメータ `id` を受け取り、`Hello {id}` というレスポンスを返します。

## ディレクトリ構成

```text
geolonia-kintone-estimate-api/
├── bin/
│   └── app.ts       ← CDK エントリポイント
├── lib/
│   └── app-stack.ts ← スタック定義
├── lambda/
│   └── handler.ts   ← Lambda関数の本体
├── cdk.json
├── package.json
└── tsconfig.json
```

## 開発者向け

### 1. 初期セットアップ

```bash
git clone git@github.com:geolonia/geolonia-kintone-estimate-api.git
cd geolonia-kintone-estimate-api
npm install
```

### 2. デプロイ

```bash
npm run deploy:dev // 開発環境にデプロイ
npm run deploy:v1 // 本番環境にデプロイ
```

## 動作確認

ブラウザまたは curl で以下を実行：

```bash
curl "https://<api-id>.execute-api.ap-northeast-1.amazonaws.com/v1/?id=world"
# => Hello world
```
