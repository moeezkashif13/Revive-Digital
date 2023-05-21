import Link from "next/link";
// ...omitted for brevity
// components/breadcrumbs/Breadcrumbs.ts
const TempBread = ({ items }) => {
  return (
    <div className="flex pl-28 mt-12 mb-8 space-x-2 items-center text-[#777777] font-medium capitalize">
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          return (
            <>
              <Link
                href={crumb.path}
                key={i}
                className="text-indigo-500 hover:text-indigo-400 hover:underline"
              >
                {crumb.label}
              </Link>
              {/* separator */}
              <span> / </span>
            </>
          );
        } else {
          return <p>{crumb.label}</p>;
        }
      })}
    </div>
  );
};
export default TempBread;
