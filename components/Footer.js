export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12 py-6 text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-blue-600">Geo_Production</span></p>
    </footer>
  );
}