import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";

const AddProjectForm = () => {
  const [addProject, { error }] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      try {
        const { user } = cache.readQuery({ query: QUERY_USER });
        cache.writeQuery({
          query: QUERY_USER,
          data: { user: { ...user, projects: [...user.projects, addProject] } }
        });
      } catch (e) {
        console.error(e);
      }
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const projectLink = event.target.projectLink.value;
    const githubLink = event.target.githubLink.value;
    const description = event.target.description.value;

    try {
      await addProject({
        variables: { projectLink, githubLink, description }
      });
      event.target.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='projectLink'
        placeholder='Project Link'
        required
      />
      <input type='text' name='githubLink' placeholder='GitHub Link' required />
      <textarea
        name='description'
        placeholder='Description'
        required
      ></textarea>
      <button type='submit'>Add Project</button>
      {error && <div>Something went wrong...</div>}
    </form>
  );
};

export default AddProjectForm;
