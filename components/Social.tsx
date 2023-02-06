import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid';

export default function Social() {
  return (
    <a
      href="https://wa.me/6281231007474"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Kontak Panitia"
      target="_blank"
      rel="noreferrer"
    >
      <ChatBubbleOvalLeftIcon />
    </a>
  );
}
