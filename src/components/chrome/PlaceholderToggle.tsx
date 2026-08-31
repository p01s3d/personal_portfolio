import { togglePlaceholderAssets, usePlaceholderAssets } from '../../hooks/usePlaceholderAssets';

export function PlaceholderToggle() {
  const on = usePlaceholderAssets();

  return (
    <button
      type="button"
      className={`placeholder-toggle${on ? ' is-active' : ''}`}
      onClick={() => togglePlaceholderAssets()}
      aria-pressed={on}
    >
      <span className="placeholder-toggle-dot" aria-hidden />
      {on ? 'TEST ASSETS · ON' : 'TEST ASSETS'}
    </button>
  );
}
