import Image from "next/image";
import { staff } from "@/lib/site-config";
import { placeholderImages } from "@/lib/placeholder-images";

export default function StaffIntro() {
  return (
    <div className="grid items-center gap-8 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 md:grid-cols-[220px_1fr]">
      <div className="mx-auto w-40 overflow-hidden rounded-full border-4 border-rose-50 shadow-sm md:w-full md:rounded-2xl">
        <Image
          src={placeholderImages.staffPortrait.src}
          alt={placeholderImages.staffPortrait.alt}
          width={400}
          height={400}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div>
        <span className="inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-800">
          施術歴{staff.yearsOfExperience}年+
        </span>
        <h3 className="mt-3 font-serif text-xl font-bold text-stone-900">
          {staff.name}
        </h3>
        <p className="text-sm text-stone-500">{staff.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">{staff.bio}</p>
      </div>
    </div>
  );
}
