# 1. Cài đặt thư viện: npm i

# 2. Chạy project: npm run dev

# Cấu trúc dự án

## thư mục

1. .next

- đây là 'code được dịch' của nextJS (cái mà brower sẽ chạy)
- public là nơi chứa các static file (img, css, js)
-

2. tsconfig.json

- cấu hình typescript

# định nghĩa

- Next.js là một open-source React front-end framework được bổ sung các tính năng như Server Side Rendering (SSR) và Static Site Generation (SSG). Next.js được xây dựng dựa trên thư viện React có nghĩa là Next.js lấy những lợi thế của React và bổ sung các tính năng.

# component với nextJS

## Khi nào nên SSR/CSR

- Đối với dữ liệu **ít thay đổi**: logo, category... => dùng server component (render trước ở server)

- Đối với dữ liệu thay đổi **thường xuyên, phụ thuộc vào tương tác của người dùng** => client component\

## Tại sao lại chia tắt Server/Client Component

- Với dữ liệu **tĩnh** (trang HTML không) => server render
- Với dữ liệu **động** (hình ảnh, âm thanh, xử lý thông tin, truy xuất tài liệu) => client render
- Việc chia tách dữ liệu "tĩnh + động" => sẽ làm giảm kích thức file cần render ở client (vì đã render 1 phần ở server)

# router và layout

- tất cả code được chứa bên trong folder app sẽ được gọi là SSR

## tạo route

- để khai báo 1 route trong nextJS chúng ta chỉ cần tạo folder có tên là route ta muốn tạo ở trong folder app là xong.
- tên file muốn chạy trong folder route bắt buộc phải tên là _*page.tsx*_
- Tên của component cần phải viết hoa chữ cái đầu tiên.

```
const Products = () => {
  return <>Đây là trang Admin sản phẩm</>;
};

export default Products;
```

### component Link

- khi muốn route mà không phải load lại trang thì chúng ta sẽ dùng thêm thư viện Link
-

```
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
        <ul>
          <Link href={"/facebook"}>facebook</Link>
        </ul>
    </main>
  );
}
```

### useRouter

- khi bạn chuyển trang mà muốn mang theo tham số, dữ liệu thì nên dùng useRoute thay vì Component Link

**'use client'**

- dùng để đánh dấu rằng đây là 1 cái client component, phần nào client xử lý thì client sẽ xử lý còn phần nào server xử lý sẽ giữ nguyên
- muốn dùng các thư viện ở phía client thì **bắt buộc** phải có tag 'use client'

```
"use client";

import { useRouter } from "next/navigation";
const Facebook = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <>
      <h1>FACEBOOK</h1>

      <button
        onClick={() => {
          handleBack();
        }}
      >
        Back home
      </button>
    </>
  );
};

export default Facebook;
```

## layout

- muốn chia layout cho dự án thì **bắt buộc** phải đặt tên file là _*layout*_ chứ không được đặt bằng những cái tên khác

- trong file _*layout*_
