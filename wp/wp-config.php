<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fix_ldn' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#xo!`Z1T9l.@V.tM?j84-XFD/(NXLcZTJ(IM1%Q^L@dzW[+(9Dl8uC8Iwd}GqfaQ' );
define( 'SECURE_AUTH_KEY',  'CA%N#1jZ.M]xWPFK0;z1U<a]G*:&/@YiLiX+ST/7ZcK=bQ4mk5Xk=.^CU(T_soA(' );
define( 'LOGGED_IN_KEY',    'Hu1Q{VIkh#:G7h ,7/ys=@qx0B :1Vr@?sw7mA0=7*P/e.{{h&2Q5$ZMFP_;ZEEU' );
define( 'NONCE_KEY',        '>Kp>#w>]&D>Ea>XVYPFqN4ZeZ9r##f{5htjn2P*{i@|RP3f@Z^>)IbX.ZkO70_K&' );
define( 'AUTH_SALT',        '-.nP%B(jkl rRwNs<!d._{CSfTIU%~UutTWrf%$S5jr{QzcdLQpXkB:rb&^uE]l&' );
define( 'SECURE_AUTH_SALT', '_uZ:tZ$6SGp+X!Dz~&HVT4R[_`]?1q=8e_umlDQ)7 WQ2Le82V<`0`w>7J?L(^Nh' );
define( 'LOGGED_IN_SALT',   'p0H@.fO}B=/t@c$Pr*INdKt2]+dYJ$t1J,j84:q(8 2r&I#e%l1(} x{>I{KC;T]' );
define( 'NONCE_SALT',       '&X^#cq=ajvIzl4kv^$/5rwe;S#pYU;N=m#4p=Zw`bxnh!vT~Ah:V}C-LXR!MEDf,' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
