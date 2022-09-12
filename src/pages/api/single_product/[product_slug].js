import nc from 'next-connect';
import { getProduct } from '../../../controllers/client_pannel_api/single_product';

const handler = nc();

handler.get(getProduct);

export default handler;
