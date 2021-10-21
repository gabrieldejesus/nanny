import { SVGProps } from 'react';

export default function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
        fill="var(--green)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.4101 23.05L19.5853 14.3C19.3272 14.15 19.2166 14 18.9217 14C18.5161 14 18 14.35 18 15V33C18 33.65 18.5161 34 18.9217 34C19.2166 34 19.3272 33.85 19.5853 33.7L33.4101 24.95C33.7051 24.75 34 24.55 34 24C34 23.45 33.7051 23.25 33.4101 23.05Z"
        fill="white"
      />
    </svg>
  );
}
