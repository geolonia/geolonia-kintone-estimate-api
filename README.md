# geolonia-kintone-estimate-api

このプロジェクトは、AWS CDK を使用してデプロイされるシンプルな API です。
クエリパラメータ `id` を受け取り、`Hello {id}` というレスポンスを返します。

## 📦 構成内容

- **AWS Lambda**（Node.js + TypeScript）
- **API Gateway REST API**
- **AWS CDK** によるインフラ構成（TypeScript）

## 📁 ディレクトリ構成

```text
geolonia-kintone-estimate-api/
├── bin/
│   └── app.ts       ← CDK エントリポイント
├── lib/
│   └── app-stack.ts ← スタック定義
├── lambda/
│   └── handler.ts         ← Lambda関数の本体
├── cdk.json
├── package.json
└── tsconfig.json
```

## 🚀 セットアップ手順

### 1. 初期セットアップ

```bash
git clone git@github.com:geolonia/geolonia-kintone-estimate-api.git
cd geolonia-kintone-estimate-api
npm install
```

### 2. ビルドとデプロイ

```bash
npm run build
cdk deploy
```

## ✅ 使用方法

デプロイが完了すると、API Gateway の URL が出力されます。

例：


https://<api-id>.execute-api.ap-northeast-1.amazonaws.com/v1/?id=world

このようにアクセスすると、以下のようなレスポンスが返されます：

Hello world

## 🧪 動作確認

ブラウザまたは curl で以下を実行：

```bash
curl "https://<api-id>.execute-api.ap-northeast-1.amazonaws.com/v1/?id=world"
# => Hello world
```
