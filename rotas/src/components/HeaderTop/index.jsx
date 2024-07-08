import Link from "next/link";

export default function HeaderTop() {
  return (
    <header>
      <nav>
        <p>sdadasd</p>
        <Link href={"/frontend"}>Front-End</Link>
        <Link href={"/backend"}>Back-End</Link>
        <Link href={"/mobile"}>Mobile</Link>
      </nav>
    </header>
  );
}
