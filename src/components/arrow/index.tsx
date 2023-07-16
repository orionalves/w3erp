import right from '@icons/right.svg'

type ArrowProps = {
  left?: true
}
const Arrow = ({ left }: ArrowProps) => (
  <img
    style={left ? { transform: 'rotate(180deg)' } : undefined}
    src={right}
    alt={left ? 'Seta para esquerda' : 'Seta para direita'}
  />
)
export default Arrow
