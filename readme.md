# Customer API Sample (praktisi mengajar)

Rest api sederhana menggunakan node.js dan express

## Cara Install

Pastikan node sudah terinstall di komputer. apabila belum silahkan download [disini](https://nodejs.org/en).

Berikut adalah cara installnya:
1. clone repository

```bash
git clone https://github.com/muhaliusman/customer-api.git
```
2. masuk ke folder project kemudian copy `.env.example` ke `.env`
```bash
cp .env.example .env
```
3. ubah nilai env variable dan sesuaikan dengan local komputer anda
```bash
NODE_ENV=development
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=customer_api
DB_HOST=127.0.0.1
```
4. install dependency
```bash
npm install
```
5. buat database customer_api
6. jalankan perintah migrasi dan seed
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
7. jalankan aplikasi
```bash
npm run start:dev
```

## Happy Coding 😁