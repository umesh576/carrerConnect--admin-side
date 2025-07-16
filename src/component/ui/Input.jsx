export default function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}
