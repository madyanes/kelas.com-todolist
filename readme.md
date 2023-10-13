# Aplikasi Pengelola Task

Aplikasi pengelola todo atau pengelola task sederhana yang dibuat dengan teknologi Node.js dengan basis data MySQL. Mencakup fitur menampilkan todo, membuat todo, memperbarui todo, dan menghapus todo.

## RESTful API

Aplikasi ini memiliki dua versi, yaitu CLI dan API. Untuk versi API, pastikan berada di cabang `express-api`.

## Konfigurasi Basis Data

Untuk menjalankan aplikasi ini, sesuaikan konfigurasi basis data seperti berikut:

```txt
host: 127.0.0.1
user: root
password: kelasdotcom
database: kelasdotcom
port: 3306
```

Pastikan juga telah tersedia tabel `tasks`, dengan kolom-kolom sebagai berikut:

- task_id => int auto increment
- user_id => int
- title => varchar
- is_done => tinyint => (0/1)
- created_at => datetime
- updated_at => datetime
