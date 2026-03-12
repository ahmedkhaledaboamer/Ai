 import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("page");

  return (
    <section>
     <div>
      <h1>Hello</h1>
     </div>
    </section>
  );
}
