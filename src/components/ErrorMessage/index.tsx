type Props = {
  message: string
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <h3 className="mb-5 text-xl font-medium text-red-400">
      This error occured: <span className="italic">{message}</span>
    </h3>
  )
}

export default ErrorMessage
