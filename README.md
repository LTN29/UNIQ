# UNIQ Home Web

Landing page chính thức của thương hiệu UNIQ. Phase 1 chỉ khởi tạo nền tảng kỹ thuật: Vite React TypeScript, Tailwind CSS, design tokens, component nền tảng, cấu hình chất lượng source và layout skeleton.

## Tech stack

- Vite
- React
- TypeScript strict
- Tailwind CSS
- ESLint
- Prettier
- Lucide React
- clsx
- tailwind-merge

## Yêu cầu môi trường

- Node.js 20 LTS hoặc mới hơn
- npm 10 hoặc mới hơn

## Cài dependency

```bash
npm install
```

## Chạy local

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev`: chạy Vite dev server.
- `npm run build`: kiểm tra TypeScript và build production.
- `npm run preview`: preview thư mục `dist`.
- `npm run lint`: chạy ESLint.
- `npm run typecheck`: chạy TypeScript check không emit file.
- `npm run format`: format source bằng Prettier.
- `npm run format:check`: kiểm tra format bằng Prettier.

## Cấu trúc thư mục

```text
public/
  images/
    brand/
    hero/
    products/
    technology/
    lifestyle/
    app/
    news/
  icons/
src/
  assets/
  components/
    layout/
    sections/
    ui/
  config/
  data/
  hooks/
  lib/
  styles/
  types/
```

## Quy ước component

- Component UI nền tảng nằm trong `src/components/ui`.
- Component layout dùng chung nằm trong `src/components/layout`.
- Component section landing page sẽ nằm trong `src/components/sections` ở Phase 2.
- Không hardcode navigation trong component; dùng `src/config/navigation.ts`.
- Không hardcode màu trong component; dùng Tailwind token ánh xạ từ CSS variables.

## Quy ước asset

- Asset public đặt trong `public/images` theo nhóm nội dung.
- Phase 1 chưa dùng ảnh sản phẩm thật.
- Không tải asset trực tiếp từ website cũ trong phase này.
- Logo hiện tại chỉ là text `UNIQ`; chưa dùng logo chính thức.

## Biến môi trường

Sao chép `.env.example` thành `.env.local` khi cần cấu hình môi trường local.

```bash
VITE_SITE_URL=https://uniq-home.com
VITE_WARRANTY_ACTIVATION_URL=https://baohanh.simi.vn/kich-hoat-bao-hanh
VITE_WARRANTY_LOOKUP_URL=https://baohanh.simi.vn/bao-hanh
```

## Giới hạn Phase 1

- Chưa xây giao diện landing page hoàn chỉnh.
- Chưa thêm ảnh sản phẩm thật.
- Chưa thêm animation phức tạp.
- Chưa dùng React Router, CMS, backend giả hoặc state management global.
- Chưa deploy.
