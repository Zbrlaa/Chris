<script>
  import { createEventDispatcher } from 'svelte';

  let name = '';
  let email = '';
  let message = '';
  const dispatch = createEventDispatcher();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      name = '';
      email = '';
      message = '';
      dispatch('submit', { success: true });
    } else {
      dispatch('submit', { success: false });
    }
  };
</script>

<svelte:head>
  <title>Contact me</title>
</svelte:head>

<div class="container">
  <div class="top">
    <h1>Contact</h1>
  </div>
  <div class="contact">
    <div class="info">
      <p>For all enquiries, please fill out the form below and I will try get back to you as soon as possible.</p>
      <p>Thank you !</p>
      <hr>
      <h3>Please complete the form below</h3>
    </div>
    <form on:submit={handleSubmit}>
      <label>
        Nom :
        <input type="text" bind:value={name} required />
      </label>
      <label>
        Email :
        <input type="email" bind:value={email} required />
      </label>
      <label>
        Message :
        <textarea bind:value={message} required></textarea>
      </label>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</div>

<style>
	h1, h3, p, label, textarea {
    font-family: 'Helvetica', sans-serif;
    color: #444;
  }

  h1 {
    font-size: 2.5em;
    margin-bottom: 1em;
    color: #444;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10vh;
		padding-left: 30vh;
      flex-wrap: wrap;
      gap: 10px;
  }

  .contact {
    background-color: #fff;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
  }

  .info p {
    font-size: 1.1em;
    color: #666;
    margin-bottom: 1em;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 1em;
    color: #444;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 1.1em;
    color: #555;
  }

  input, textarea {
    padding: 0.75em;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  button {
    padding: 0.75em 1.5em;
    border: none;
    border-radius: 4px;
    background-color: #83597f;
    color: white;
    font-size: 1.1em;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #5e435b;
  }
</style>
