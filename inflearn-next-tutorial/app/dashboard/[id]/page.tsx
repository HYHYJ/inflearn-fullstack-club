export default function DashboardDetailPage({ params, searchParams }) {
  console.log("params", params);
  return (
    <div>
      DashboardDetailPage {params.id} id={searchParams.code}
    </div>
  );
}
