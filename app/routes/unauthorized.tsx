export default function Unauthorized() {
  return (
    <div className="mt-10 p-6 max-w-lg mx-auto bg-red-100 border-l-4 border-red-500 text-red-700">
      <h3 className="text-lg font-medium mt-0">Access Denied</h3>
      <div className="mt-2">
        You don&apos;t have access to this resource. Please contact the
        administrator for more information.
      </div>
    </div>
  );
}
