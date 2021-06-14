type Props = {
  fname: string;
  size: string;
};

export default function MyImage(props: Props) {
  let fname = './' + props.fname;
  let size = props.size + 'px';

  return <img width={size} src={fname} style={{ border: '1' }} />;
}
