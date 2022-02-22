const Card = ({ title, salary, level, body, tech, rate }) => {
  return (
    <div className="card m-2 max-w-lg sm:max-w-xs bg-base-content text-primary-content shadow-xl hover:shadow-2xl">
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>

        {salary && (
          <div className="badge badge-lg mb-4 badge-primary text-neutral">
            {salary}
          </div>
        )}

        {level && (
          <div className="badge badge-lg mb-4 badge-primary text-neutral">
            {level}
          </div>
        )}

        <div className="font-light">
          <p className="h-48">{body}</p>

          <div className="my-6 h-48">
            {tech && <p>You will learn:</p>}
            <ul>
              {tech?.map((technology) => (
                <li className="list-disc ml-8">{technology}</li>
              ))}
            </ul>
          </div>
        </div>
        {rate && (
          <div class="stat-value flex justify-center items-center	">
            <div>{rate}</div>
            <div className="font-light text-xs ml-2">
              <p>USD</p>
              <p>/hr</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
