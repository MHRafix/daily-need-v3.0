import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

export function useHandleLogout() {
	const history = useRouter();

	const handleLogout = () => {
		history.push('/my_account/my_acc');
		Cookie.remove('user_information');
		Cookie.remove('user_verify');
		Cookie.remove('lock_screen');
	};

	return { handleLogout };
}
