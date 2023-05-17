interface HeadingProps {
    content: string
}

export function Heading({content}: HeadingProps) {
  return (
    <p className="text-white text-2xl font-bold text-center">
      {content}
    </p>
  );
}
