import cn from 'classnames';
export interface HelloProps {
  className?: string;
  name: string;
}

export function Hello({ className, name }: HelloProps) {
  return <div className={className}>Hello {name}</div>;
}
