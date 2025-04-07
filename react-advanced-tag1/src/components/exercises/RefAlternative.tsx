import { FormEvent } from'react'

export default function RefAlternative() {

    //Stefan beispiel
    console.log('ref')
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        console.log(data.get('email'), data.get('password'));
    }

    return <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" /><br />
        <input type="password" name="password" placeholder="password" /><br />
        <input type="submit" value="Send" />
    </form>
}